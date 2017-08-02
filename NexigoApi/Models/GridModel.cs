using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NexigoApi.Models
{
    public class Customer
    {
        public string Name { get; set; }
        public string Address { get; set; }

    }
    public class GridModel
    {
        public List<Customer> data { get; set; }
        public int total { get; set; }
    }
}