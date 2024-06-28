import { MatchLiveType } from "./MatchForm";

type MatchLiveProps = {
  matchLive: MatchLiveType;
};

export default function ({ matchLive }: MatchLiveProps) {
  // state

  // comportement

  // affichage
  return (
    <li>
      <a>
        {/*onClick={displayMatch}>*/}
        <div className="li__event">
          <div>event</div>
          <div>{matchLive.event}</div>
        </div>
        <div className="li__score">
          {matchLive.team1 + " V/S " + matchLive.team2}
        </div>
      </a>
    </li>
  );
}
