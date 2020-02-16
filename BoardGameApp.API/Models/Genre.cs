using System.Collections.Generic;

namespace BoardGameApp.API.Models
{
    public class Genre
    {
        public int Id { get; set; }
        public string GenreName { get; set; }
        public ICollection<GameGenre> GameGenres { get; set; }

    }
}