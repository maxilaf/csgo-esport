import { MatchLiveType } from "./MatchForm";

type MatchLiveProps = {
  matchLive: MatchLiveType;
  displayMatch: (url: string, matchLive: MatchLiveType) => void;
};

export default function ({ matchLive, displayMatch }: MatchLiveProps) {
  // state

  // comportement

  // affichage
  return (
    <li>
      <a onClick={() => displayMatch(`http://127.0.0.1:5000/api/match/${matchLive.id}-${matchLive.team1}-${matchLive.team2}-${matchLive.event}`, matchLive)}>
        <div className="li__event"> 
          <div>{matchLive.event}</div>
        </div>
        <div className="li__score">
          {matchLive.team1} V/S {matchLive.team2}
        </div>
      </a>
    </li>
  );
}
