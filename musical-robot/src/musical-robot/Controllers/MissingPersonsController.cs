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
            return _dataService.Get().Where(p => p.UID == id);
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
