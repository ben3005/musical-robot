using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using musical_robot.Services;
using System;
using System.Threading.Tasks;

namespace musical_robot.Middleware
{
	public class TwitterAuthMiddleware
	{
		private string twitterBearerToken = "TwitterBearerCache";

		private readonly RequestDelegate _next;
		private readonly IMemoryCache _memCache;
		private readonly ITwitterService _twitter;

		public TwitterAuthMiddleware(RequestDelegate next, IMemoryCache memCache, ITwitterService twitter)
		{
			_twitter = twitter;
			_next = next;
			_memCache = memCache;
		}

		public async Task Invoke(HttpContext httpContext)
		{
			string token;
			if (!_memCache.TryGetValue(twitterBearerToken, out token))
			{
				_memCache.Set(twitterBearerToken, _twitter.UpdateBearerToken().Result, new MemoryCacheEntryOptions().SetAbsoluteExpiration(TimeSpan.FromDays(1)));
			}
			await Invoke(httpContext);
		}
	}
}
