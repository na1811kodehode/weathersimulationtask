using System;
namespace WeatherSimulation
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Create weather instance.
            Weather weather = new Weather();
            //Display generated weather details.
            weather.PrintOut();
        }
    }

    class Weather
        {
            public double Temperature { get; set; } = 0;
            public string Condition { get; set; } = "";
            public int Cloudiness { get; set; } = 0;

            private static Random rnd = new Random();

            //Generate random temperature between -10 and 40 celsius, rounded to two decimals.
            public double RandomTemperature()
            {
                double randomTemp = -10 + rnd.NextDouble() * 50;
                return Math.Round(randomTemp, 2);
                  
            }
            
            //Randomly selects a weather condition from an array.
            public string RandomCondition()
            {
                string[] condition = {"Clear", "Rain", "Snow"};
                int index = rnd.Next(condition.Length);
                return condition[index];
            }

            //Generate random cloudiness % between 0 - 100.
            public int RandomCloudiness()
            {
                return rnd.Next(100);
            }

            //Checks for extreme weather conditions and returns an appropriate string if conditions are met.
            public string ExtremeWeather(string condition, double temperature) 
            {
        
                if (condition == "Snow" && temperature < -10)
                {
                    return "Warning: It's extremely cold and snowy. Do not go outside!";
                }
                else
                {
                    return "";
                }
            }

            //Generate random weather details and prints them out to console.
            public void PrintOut()
            {
                this.Temperature = RandomTemperature();
                this.Condition = RandomCondition();
                this.Cloudiness = RandomCloudiness();

                string ut = @$"
                Today's Weather:
                Temperature: {this.Temperature}°C
                Condition: {this.Condition}
                Cloudiness: {this.Cloudiness}%
                {ExtremeWeather(this.Condition, this.Temperature)}
                ";
                Console.WriteLine(ut);
            }

        }
}