import { ChildProfile } from '../models/ChildProfile.js';
import { DashboardSummary } from '../models/DashboardSummary.js';
import { MathEquation } from '../models/MathEquation.js';
import { Notification } from '../models/Notification.js';
import { Planet } from '../models/Planet.js';
import { SignLevel } from '../models/SignLevel.js';
import { SpeechLevel } from '../models/SpeechLevel.js';
import { Subject } from '../models/Subject.js';
import { WordChallenge } from '../models/WordChallenge.js';
import {
  childProfileSeed,
  dashboardSummarySeed,
  mathEquationSeeds,
  notificationSeeds,
  planetSeeds,
  signLevelSeeds,
  speechLevelSeeds,
  subjectSeeds,
  wordChallengeSeeds,
} from '../seed/seedData.js';

async function upsertByKey<T extends Record<string, unknown>>(
  model: any,
  key: string,
  items: readonly T[],
) {
  await model.bulkWrite(
    items.map((item) => ({
      updateOne: {
        filter: { [key]: item[key] },
        update: { $set: item },
        upsert: true,
      },
    })),
  );
}

export async function seedDatabase() {
  await upsertByKey(Subject, 'id', subjectSeeds);
  await upsertByKey(WordChallenge, 'id', wordChallengeSeeds);
  await upsertByKey(MathEquation, 'key', mathEquationSeeds);
  await upsertByKey(SpeechLevel, 'id', speechLevelSeeds);
  await upsertByKey(SignLevel, 'id', signLevelSeeds);
  await upsertByKey(Planet, 'id', planetSeeds);

  const childProfile = await ChildProfile.findOneAndUpdate(
    { slug: childProfileSeed.slug },
    { $set: childProfileSeed },
    { upsert: true, new: true, setDefaultsOnInsert: true },
  );

  await DashboardSummary.findOneAndUpdate(
    { childSlug: dashboardSummarySeed.childSlug },
    {
      $set: {
        ...dashboardSummarySeed,
        childId: childProfile._id,
      },
    },
    { upsert: true, new: true, setDefaultsOnInsert: true },
  );

  await Promise.all(
    notificationSeeds.map((notification) =>
      Notification.findOneAndUpdate(
        { seedKey: notification.seedKey },
        {
          $set: {
            ...notification,
            childId: childProfile._id,
          },
        },
        { upsert: true, new: true, setDefaultsOnInsert: true },
      ),
    ),
  );

  return {
    childProfiles: await ChildProfile.countDocuments(),
    subjects: await Subject.countDocuments(),
    wordChallenges: await WordChallenge.countDocuments(),
    mathEquations: await MathEquation.countDocuments(),
    speechLevels: await SpeechLevel.countDocuments(),
    signLevels: await SignLevel.countDocuments(),
    planets: await Planet.countDocuments(),
    dashboardSummaries: await DashboardSummary.countDocuments(),
    notifications: await Notification.countDocuments(),
  };
}
