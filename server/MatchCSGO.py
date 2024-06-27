import asyncio
from  hltv_async_api import Hltv

class MatchCSGO:
    def __init__(self) -> None:
        self.hltv = Hltv()

    async def get_live_matches(self):
        live_matches = await self.hltv.get_matches(future=False, min_rating=0, days=0)
        return live_matches
    
    async def close(self):
        await self.hltv.close()


async def main():
    matchCSGO = MatchCSGO()
    try:
        print(len(await matchCSGO.get_live_matches()))
    finally:
        await matchCSGO.close()


if __name__ == "__main__":
    asyncio.run(main())