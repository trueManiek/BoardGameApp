using System;
using Microsoft.AspNetCore.Http;

namespace BoardGameApp.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error", message);
            response.Headers.Add("Access-Control-Expose-Headers", "Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");
        }

        public static int CalculateMarketYears(this DateTime theDate)
        {
            var marketYears = DateTime.Today.Year - theDate.Year;

            if(theDate.AddYears(marketYears) > DateTime.Today){
                marketYears--;
            }

            return marketYears;
        }
    }
}