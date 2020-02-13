using System;

namespace BoardGameApp.API.Models
{
    public class Game
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Code { get; set; }
        public string Genre { get; set; }
        public int NumberOfCopies { get; set; }
        public DateTime ReleaseDate { get; set; }
        public DateTime AddedDate { get; set; }
        public DateTime LastRental { get; set; }
        public int AllRentalCount { get; set; }
        public int CurrentEventRentalCount { get; set; }
        public int MinPlayers { get; set; }
        public int MaxPlayers { get; set; }
        public int MinPlayTime { get; set; }
        public int MaxPlayTime { get; set; }
        public int MinAge { get; set; }
        public string Complexity { get; set; }
        public Image Image { get; set; }

    }

}