using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using BoardGameApp.API.Data;
using BoardGameApp.API.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BoardGameApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : ControllerBase
    {
        private readonly IGameRepository _repo;
        private readonly IMapper _mapper;

        public GamesController(IGameRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetGames()
        {
            var games = await _repo.GetGames();
            var gamesToReturn = _mapper.Map<IEnumerable<GameForListDto>>(games);
            
            return Ok(gamesToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetGame(int id)
        {
            var game = await _repo.GetGame(id);
            var gameToReturn = _mapper.Map<GameForDetailedDto>(game);

            return Ok(game);
        }
    }
}