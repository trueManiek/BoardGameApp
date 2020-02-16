using System.Collections.Generic;
using System.Linq;
using BoardGameApp.API.Models;
using Newtonsoft.Json;

namespace BoardGameApp.API.Data
{
    public class Seed
    {
        public static void SeedGames(DataContext context)
        {
            if (!context.Games.Any())
            {
                var gamesData = System.IO.File.ReadAllText("Data/Seeds/GameSeedData.json");
                var games = JsonConvert.DeserializeObject<List<Game>>(gamesData);

                foreach (var game in games)
                {
                    context.Games.Add(game);
                }

                context.SaveChanges();
            }
        }

        public static void SeedGenres(DataContext context)
        {
            if (!context.Genres.Any())
            {
                var genreData = System.IO.File.ReadAllText("Data/Seeds/GenreSeedData.json");
                var genres = JsonConvert.DeserializeObject<List<Genre>>(genreData);

                foreach (var genre in genres)
                {
                    context.Genres.Add(genre);
                }

                context.SaveChanges();
            }
        }

        public static void SeedGameGenres(DataContext context)
        {
            if (!context.GameGenres.Any())
            {
                var genreData = System.IO.File.ReadAllText("Data/Seeds/GameGenreSeedData.json");
                var genres = JsonConvert.DeserializeObject<List<GameGenre>>(genreData);

                foreach (var genre in genres)
                {
                    var genreInDb = context.GameGenres.Where(
                        w => w.Game.Id == genre.GameId &&
                             w.Genre.Id == genre.GenreId).SingleOrDefault();

                    if (genreInDb == null)
                    {
                        context.GameGenres.Add(genre);
                    }
                }

                context.SaveChanges();
            }
        }

        public static void SeedUsers(DataContext context)
        {
            if (!context.Users.Any())
            {
                var usersData = System.IO.File.ReadAllText("Data/Seeds/UserSeedData.json");
                var users = JsonConvert.DeserializeObject<List<User>>(usersData);

                foreach (var user in users)
                {

                    //creating passwords (not used for games)
                    byte[] passHash, passSalt;
                    CreatePasswordHash("password", out passHash, out passSalt);
                    user.PasswordHash = passHash;
                    user.PasswordSalt = passSalt;
                    user.Username = user.Username.ToLower();

                    context.Users.Add(user);
                }

                context.SaveChanges();
            }
        }

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}