export const HistoryCard = () => {
    return (
        <div className="flex h-[964px] bg-[url('/historyCard/historyBg.png')] bg-repeat-x bg-top justify-center">
            <div className="absolute h-[414px] w-[735px] bg-no-repeat bg-[url('/historyCard/textBg.png')] ml-[280px] mt-[200px]">
                <div className="pl-20">
                    <h2 className="pt-20 uppercase">ABOUT TINY COLONY</h2>
                    <p className="pt-3 w-[580px]">Tiny Colony is a Pixelated ecosystem built on the Solana blockchain, 
                    encompassing various game modes, events, and experiences; 
                    including the first-ever Construction and Management Simulation blockchain game. 
                    In the Tinyverse, players can build and grow advanced Ant Colonies, defend their bases against 
                    dark forces that roam the underground, challenge other players to battles, form alliances, and trade 
                    with one another to participate in large-scale community events. Tiny Colony is an all-encompassing Metaverse 
                    with limitless opportunities for expansion. </p>
                </div>
            </div>
        </div>
    )
}
