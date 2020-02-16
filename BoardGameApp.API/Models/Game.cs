using System;
using System.Collections.Generic;

namespace BoardGameApp.API.Models
{
    public class Game
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime ReleaseDate { get; set; }
        public DateTime AddedDate { get; set; }
        public int AllRentalCount { get; set; }
        public int MinPlayers { get; set; }
        public int MaxPlayers { get; set; }
        public int MinPlayTime { get; set; }
        public int MaxPlayTime { get; set; }
        public int MinAge { get; set; }
        public string ImageUrl { get; set; }
        public string Author { get; set; }
        public int BaseGameId { get; set; }
        public ICollection<GameCopy> GameCopies { get; set; }
        public ICollection<GameGenre> GameGenres { get; set; }

    }

}