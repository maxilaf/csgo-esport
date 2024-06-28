import { useEffect, useState } from "react";
import MatchLive from "./MatchLive";

export type MatchLiveType = {
  id: string;
  date: string;
  time: string;
  team1: string;
  team2: string;
  t1_id: string;
  t2_id: string;
  maps: string;
  rating: number;
  event: string;
};

type MatchFormProps = {
  displayMatch: (url: string, matchLive: MatchLiveType) => void;
}

export default function MatchForm({ displayMatch } : MatchFormProps) {
  // state
  const [matchesLive, setMatchesLive] = useState<MatchLiveType[] | null>(null);

  // comportement

  const fetchMatchesLive = () => {
    // Appel à la route /api/data
    fetch("http://127.0.0.1:5000/api/live_matches")
      .then((response) => response.json())
      .then((data) => {
        if (data.lenght !== 0) {
          setMatchesLive(data);
        } else {
          setMatchesLive(null);
        }
      })
      .catch((error: Error) => {
        alert("Erreur lors de la récupération des données: " + error);
      });
  };

  useEffect(() => {
    fetchMatchesLive();
  }, []);

  const afficherMatchLive = () => {
    if (matchesLive === null) {
      return (
        <p>
          Il n'y a pas de MATCH CS:GO en LIVE pour l'instant :/ Reviens plus
          tard !"
        </p>
      );
    } else {
      return (
        <ul className="matchForm__liste">
          {matchesLive?.map((matchLive: MatchLiveType) => {
            return <MatchLive key={matchLive.id} matchLive={matchLive} displayMatch={displayMatch} />;
          })}
        </ul>
      );
    }
  };

  // affichage

  return <div className="matchForm">{afficherMatchLive()}</div>;
}
