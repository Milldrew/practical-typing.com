import * as fse from 'fs-extra';
import * as path from 'path';


const scoresPath = path.join(process.cwd(), 'scores.json');
const doesScoresFileExist = fse.existsSync(scoresPath);
export function createScoresJson() {

  if (!doesScoresFileExist) {
    fse.writeJsonSync(scoresPath, []);
  }
  const scores = fse.readJsonSync(scoresPath);
  return scores;
}

export function writeScoresJson(scores: any) {
  fse.writeJsonSync(scoresPath, scores);
}

