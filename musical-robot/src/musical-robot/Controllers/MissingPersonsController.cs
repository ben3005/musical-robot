using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using musical_robot.Middleware;
using musical_robot.Models;
using musical_robot.Services;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace musical_robot.Controllers
{
	[Route("api/[controller]")]
	public class MissingPersonsController : Controller
	{
		private readonly IMissingPersonsService _dataService;

		public MissingPersonsController(IMissingPersonsService dataService)
		{
			_dataService = dataService;
		}

		// GET: api/values
		[HttpGet]
		public IEnumerable<MissingPerson> Get()
		{
			return _dataService.Get();
		}

		// GET api/values/5
		[HttpGet("{id}")]
		public object Get(string id)
		{
			var person = _dataService.Get().Where(p => p.UID == id).Single();
			person.History = generatePersonHistory(person.Latitude, person.Longitude);

			return person;
		}

		private IEnumerable<History> generatePersonHistory(double latitude, double longitude)
		{
			IList<History> fakeHistory = new List<History>();
			Random rand = new Random();
			for (int i = 0; i < 10; i++)
			{
				fakeHistory.Add(new History()
				{
					Message = "Message number: " + (i + 1).ToString(),
					EntryOn = RandomDay(rand),
					Location = new Coords()
					{
						Latitude = latitude + (rand.NextDouble() / 10.0),
						Longitude = longitude - (rand.NextDouble() / 10.0)
					}
				});
			}

			return fakeHistory;
		}
		private DateTime RandomDay(Random gen)
		{
			DateTime start = new DateTime(1995, 1, 1);
			int range = (DateTime.Today - start).Days;
			return start.AddDays(gen.Next(range));
		}

		// POST api/values
		[HttpPost]
		public void Post([FromBody]string value)
		{
			throw new NotImplementedException();
		}

		// PUT api/values/5
		[HttpPut("{id}")]
		public void Put(int id, [FromBody]string value)
		{
			throw new NotImplementedException();
		}

		// DELETE api/values/5
		[HttpDelete("{id}")]
		public void Delete(int id)
		{
			throw new NotImplementedException();
		}
	}
}
