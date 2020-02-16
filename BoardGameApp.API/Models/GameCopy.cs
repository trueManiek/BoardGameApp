namespace BoardGameApp.API.Models
{
    public class GameCopy
    {
        public int Id { get; set; }
        public string Comment { get; set; }
        public string Publisher { get; set; }
        public string Language { get; set; }
        public bool Barrowed { get; set; }
        public string Code { get; set; }
        public Game Game { get; set; }
        public int GameId { get; set; }
    }
}