using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CompGames.Models
{
    public class ComputerGames
    {
        string name;
        double level;
        int experience;
        static public List<ComputerGames> compGamesList = new List<ComputerGames>();
        public ComputerGames(string name, double level, int experience)
        {
            Name = name;
            Level = level;
            Experience = experience;
        }

        public ComputerGames()
        {
            ComputerGames.compGamesList.Add(new ComputerGames("starwars", 2, 5));
            ComputerGames.compGamesList.Add(new ComputerGames("GTA", 8, 10));
        }

        public string Name { get => name; set => name = value; }
        public double Level { get => level; set => level = value; }
        public int Experience { get => experience; set => experience = value; }
    }
}