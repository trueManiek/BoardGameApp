using System;
using System.Collections.Generic;
using BoardGameApp.API.Models;

namespace BoardGameApp.API.Dtos
{
    public class GameForListDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime AddedDate { get; set; }
        public DateTime ReleaseDate { get; set; }
        public int MinPlayers { get; set; }
        public int MaxPlayers { get; set; }
        public int MinPlayTime { get; set; }
        public int MaxPlayTime { get; set; }
        public int MinAge { get; set; }
        public string Author { get; set; }
        public int BaseGameId { get; set; }
        public string ImageUrl { get; set; }
    }
}