using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CompGames.Models;

namespace CompGames.Controllers
{
    public class ComputerGamesController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<ComputerGames> Get()
        {
            // return new string[] { "value1", "value2" };
            ComputerGames cg = new ComputerGames();
            List<ComputerGames> cgList = ComputerGames.compGamesList;
            return cgList;
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]ComputerGames Game)
        {
            ComputerGames.compGamesList.Add(Game);
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}