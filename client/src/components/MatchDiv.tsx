import MatchForm, { MatchLiveType } from "./MatchForm";
import Match from "./Match";
import { useEffect, useState } from "react";

export type MatchType = {
  id: string,
  status: string,
  maps: [
    { mapname: string, r_team1: string, r_team2: string, pick: string },
    { mapname: string, r_team1: string, r_team2: string, pick: string },
    { mapname: string, r_team1: string, r_team2: string, pick: string }
  ],
  predict1: string,
  predict2: string,
  score1: number,
  score2: number
}


export default function MatchDiv() {
  // states
  const [match, setMatch] = useState<MatchType | null>(null);
  const [matchLive, setMatchLive] = useState<MatchLiveType | null>(null)

  // comportements

  const displayMatch = (url: string, matchLive: MatchLiveType) => {
    fetchMatch(url);
    setMatchLive(matchLive);
    console.log(matchLive);
  };

  const fetchMatch = (url: string) => {
    // Appel à la route /api/data
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMatch(data);
        console.log(data);
      })
      .catch((error: Error) => {
        alert("Erreur lors de la récupération des données: " + error);
      });
  };

  // affichage
  return (
    <div className="getMatch">
      <MatchForm displayMatch={displayMatch}/>
      <Match match={match} matchLive={matchLive} />
    </div>
  );
}
