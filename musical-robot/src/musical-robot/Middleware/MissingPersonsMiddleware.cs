using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using musical_robot.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace musical_robot.Middleware
{
	public class MissingPersonsMiddleware
	{

		private const string personsCacheKey = "MissingPersonsDataCache";
		private readonly RequestDelegate _next;
		private readonly IMemoryCache _memCache;

		public MissingPersonsMiddleware(IMemoryCache memoryCache, RequestDelegate next)
		{
			_next = next;
			_memCache = memoryCache;
		}
		public async Task Invoke(HttpContext httpContext)
		{
			string path = "Data/misper.csv";
			IEnumerable<MissingPerson> data;
			if (!_memCache.TryGetValue(personsCacheKey, out data))
			{
				data = LoadFromCSV(path);
				_memCache.Set(personsCacheKey, data, new MemoryCacheEntryOptions().SetAbsoluteExpiration(TimeSpan.FromDays(1)));				
			}

			await _next.Invoke(httpContext);
		}

		private static IEnumerable<MissingPerson> LoadFromCSV(string path)
		{
			List<MissingPerson> result = new List<MissingPerson>();

			foreach (string line in File.ReadLines(path))
			{
				var csvPerson = line.Split(',');
				result.Add(new MissingPerson()
				{
					UID = csvPerson[0],
					Surname = csvPerson[1],
					Forename = csvPerson[2],
					Gender = csvPerson[3],
					BirthYear = csvPerson[4],
					Status = csvPerson[5],
					StatusPriorToDormant = csvPerson[6],
					Category = csvPerson[7],
					AccomodationType = csvPerson[8],
					Borough = csvPerson[9],
					OutputArea = csvPerson[10],
					OutputAreaCenX = csvPerson[11],
					OutputAreaCenY = csvPerson[12],
					MissingOn = csvPerson[13],
					RecordCreatedOn = csvPerson[14],
					RecordUpdatedOn = csvPerson[15],
					LastSeenOn = csvPerson[16],
					StatusChangedOn = csvPerson[17],
					Latitude = csvPerson[18],
					Longitude = csvPerson[19]

				});
			}
			result.RemoveAt(0);

			return result;
		}

	}

}
