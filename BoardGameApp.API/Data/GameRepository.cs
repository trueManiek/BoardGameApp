using System.Collections.Generic;
using System.Threading.Tasks;
using BoardGameApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace BoardGameApp.API.Data
{
    public class GameRepository : IGameRepository
    {
        private readonly DataContext _context;
        public GameRepository(DataContext context)
        {
            _context = context;
        }
        
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<Game> GetGame(int id)
        {
            var game = await _context.Games.Include(c => c.GameCopies).Include(i => i.GameGenres).ThenInclude(t => t.Genre).FirstOrDefaultAsync(f => f.Id == id);
            return game;
        }

        public async Task<IEnumerable<Game>> GetGames()
        {
            var games = await _context.Games.Include(i => i.GameGenres).ThenInclude(t => t.Genre).ToListAsync();
            return games;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}