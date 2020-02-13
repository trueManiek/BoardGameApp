using AutoMapper;
using BoardGameApp.API.Dtos;
using BoardGameApp.API.Models;

namespace BoardGameApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Game, GameForListDto>();
            CreateMap<Game, GameForDetailedDto>()
                .ForMember(dest => dest.OnMarket, opt => opt.MapFrom(src => src.ReleaseDate.CalculateMarketYears()));
        }
    }
}