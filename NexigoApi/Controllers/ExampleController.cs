using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using NexigoApi.Models;

namespace NexigoApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ExampleController : ApiController
    {
        [HttpGet]
        public string GetText()
        {
            return "only text";
        }
        [HttpGet]
        public int GetNumber()
        {
            return 555;
        }

        [HttpPost]
        public dynamic GetGridData()
        {
            Customer c1 = new Customer
            {
                Name = "Nama1",
                Address = "alamat1"
            };
            Customer c2 = new Customer
            {
                Name = "Nama2",
                Address = "alamat2"
            };
            List<Customer> listC = new List<Customer>;
            listC.Add(c1);
            listC.Add(c2);

            GridModel gridData = new GridModel
            {
                data = listC,
                total = 2
            };
            return gridData;

        }
        [HttpPost]
        //public List<SelectModel> GetSelects()
        //{

        //}
    }
}
