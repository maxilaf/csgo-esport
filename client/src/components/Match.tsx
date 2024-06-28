import { MatchType } from "./MatchDiv";
import { MatchLiveType } from "./MatchForm";

type MatchProps = {
  match: MatchType | null;
  matchLive: MatchLiveType | null;
};

export default function Match({ match, matchLive }: MatchProps) {
  // state

  // comportement
  const afficherMatch = () => {
    if (match === null) {
      return <div>Choisissez un match e-sport CS:GO a suivre</div>;
    } else {
      return (
        <div>
          <div>{match.status}</div>
          <div>{matchLive?.event}</div>
          <div>{matchLive?.team1} : {match.score1} - {matchLive?.team2} : {match.score2}</div>
          <div>{match.predict1} - {match.predict2}</div>
          <div>
            <div>{match.maps[0].mapname}</div>
            <div>{match.maps[0].r_team1} - {match.maps[0].r_team2}</div>
          </div>
          <div>
            <div>{match.maps[1].mapname}</div>
            <div>{match.maps[1].r_team1} - {match.maps[1].r_team2}</div>
          </div>
          <div>
            <div>{match.maps[2].mapname}</div>
            <div>{match.maps[2].r_team1} - {match.maps[2].r_team2}</div>
          </div>
        </div>
      );
    }
  };

  // affichage
  return afficherMatch();
}
