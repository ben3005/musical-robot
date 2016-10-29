using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace musical_robot.Models
{
	public class MissingPerson
	{
		public string UID { get; set; }
		public string Surname { get; set; }
		public string Forename { get; set; }
		public string Gender { get; set; }
		public int? BirthYear { get; set; }
		public int? Age
		{
			get
			{
				if (BirthYear.HasValue)
				{
					return DateTime.Now.Year - BirthYear.Value;
				}
				return null;
			}
		}
		public string Status { get; set; }
		public string StatusPriorToDormant { get; set; }
		public string Category { get; set; }
		public string AccomodationType { get; set; }
		public string Borough { get; set; }
		public string OutputArea { get; set; }
		public string Latitude { get; set; }
		public string Longitude { get; set; }
		public string OutputAreaCenX { get; set; }
		public string OutputAreaCenY { get; set; }
		public string MissingOn { get; set; }
		public string RecordCreatedOn { get; set; }
		public string RecordUpdatedOn { get; set; }
		public string LastSeenOn { get; set; }
		public string StatusChangedOn { get; set; }
	}
}
