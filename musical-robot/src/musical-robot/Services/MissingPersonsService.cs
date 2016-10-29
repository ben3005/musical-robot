using Microsoft.Extensions.Caching.Memory;
using musical_robot.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace musical_robot.Services
{
	public interface IMissingPersonsService
	{
		IEnumerable<MissingPerson> Get();
	}
	public class MissingPersonsService : IMissingPersonsService
	{
		private const string personsCacheKey = "MissingPersonsDataCache";
		private readonly IMemoryCache _memCache;

		public MissingPersonsService(IMemoryCache memCache)
		{
			_memCache = memCache;
		}

		public IEnumerable<MissingPerson> Get()
		{
			return _memCache.Get(personsCacheKey) as IEnumerable<MissingPerson>;
		}

	}
}
