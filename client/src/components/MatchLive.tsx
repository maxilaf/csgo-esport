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
        <div className="li__div">
          <div className="li__event">
            <span>{matchLive.event}</span>
          </div>
          <div className="li__score">
            <span className="team1Live">{matchLive.team1}</span><span className="vs">V/S</span><span className="team2Live">{matchLive.team2}</span>
          </div>
        </div>
      </a>
    </li>
  );
}
