namespace BoardGameApp.API.Models
{
    public class Image
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public Game Game { get; set; }
        public int GameId { get; set; }
    }
}