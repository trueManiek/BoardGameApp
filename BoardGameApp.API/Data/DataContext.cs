using BoardGameApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace BoardGameApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}

        public DbSet<User> Users { get; set; }
        public DbSet<Game> Games { get; set; }
        public DbSet<GameCopy> GameCopies { get; set; }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<GameGenre> GameGenres { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<GameGenre>()
                .HasKey(gg => new {gg.GameId, gg.GenreId});
            modelBuilder.Entity<GameGenre>()
                .HasOne(gg => gg.Game)
                .WithMany(game => game.GameGenres)
                .HasForeignKey(gg => gg.GameId);
            modelBuilder.Entity<GameGenre>()
                .HasOne(gg => gg.Genre)
                .WithMany(genre => genre.GameGenres)
                .HasForeignKey(gg => gg.GenreId);
        }
    }
}