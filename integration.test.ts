import { initializeTestApp, loadFirestoreRules } from '@firebase/testing'
import { firestore } from './src/services/firebase'

const projectId = 'test-firebase-next-789f6'

beforeAll(async () => {
  await loadFirestoreRules({
    projectId,
    rules: `
    rules_version = '2';

    service cloud.firestore {
      match /databases/{database}/documents {
        match /{document=**} {
          allow read, write: if true;
        }
      }
    } 
    `
  })
})

afterAll(async () => {
  await Promise.all(
    initializeTestApp({ projectId }).apps.map((app) => app.delete())
  )
})

describe('Firestore', () => {
  it('should fetch example data', async () => {
    const app = initializeTestApp({ projectId })
    const db = app.firestore()

    const exampleRef = db.collection('example')
    await exampleRef.doc('1').set({ name: 'Item 1' })
    await exampleRef.doc('2').set({ name: 'Item 2' })

    const snapshot = await firestore.collection('example').get()
    const data = snapshot.docs.map((doc) => doc.data())

    expect(data).toEqual([{ name: 'Item 1' }, { name: 'Item 2' }])
  })
})
