using musical_robot.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace musical_robot.DataUtil
{
	public class MissingPersons
	{
		public static IEnumerable<MissingPerson> LoadFromCSV(string path)
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
					OutputAreaCenX = csvPerson[10],
					OutputAreaCenY = csvPerson[11],
					MissingOn = csvPerson[12],
					RecordCreatedOn = csvPerson[13],
					RecordUpdatedOn = csvPerson[14],
					LastSeenOn = csvPerson[15],
					StatusChangedOn = csvPerson[16],
					Latitude = csvPerson[17],
					Longitude = csvPerson[18]

				});
			}
			result.RemoveAt(0);

			return result;
		}

	}

}
