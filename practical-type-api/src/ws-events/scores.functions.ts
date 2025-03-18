import * as fse from 'fs-extra';
import * as path from 'path';


const scoresPath = path.join(process.cwd(), 'scores.json');
const doesScoresFileExist = fse.existsSync(scoresPath);
export function createOrGetScores() {

  if (!doesScoresFileExist) {
    fse.writeJsonSync(scoresPath, []);
  }
  let scores = fse.readJsonSync(scoresPath);
  scores = getOnlyUsersHighestScores(scores);
  return scores;
}

export function writeScoresJson(scores: any) {
  fse.writeJsonSync(scoresPath, scores);
}

export function getOnlyUsersHighestScores(scores: {
  name: string;
  score: number;
}[]): {
  name: string;
  score: number;
}[] {
  const usersHighestScore = scores.reduce<{
    [name: string]: number;
  }>((acc, score) => {
    if (acc[score.name] === undefined) {
      acc[score.name] = score.score;
    } else if (acc[score.name] < score.score) {
      acc[score.name] = score.score;
    }
    return acc;
  }, {});
  return Object.entries(usersHighestScore).map(([name, score]) => ({name, score}));
}


// const usersHighestScore = this.highScores.reduce<{
//   [name: string]: number;
// }>((acc, score) => {
//   if (acc[score.name] === undefined) {
//     acc[score.name] = score.score;
//   } else if (acc[score.name] < score.score && hasScoresLoaded()) {
//     acc[score.name] = score.score;
//     GlobalEventEmitter.emit(SHOW_CELEBRATORY_ANIMATION)
//   }
//   return acc;
// }, {});
// this.highScores = Object.entries(usersHighestScore).map(([name, score]) => ({name, score}));


