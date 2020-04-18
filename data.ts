import { Entry } from 'src/app/shared/models/entry.model';

export const POSTS: Entry[] = [
    {
        id: 0,
        newEntry: 'Film',
        title: 'Film vs Digital',
        body: 'With film you get one shot to take the perfect image. The imperfections of it is what makes it perfect. With digital you can shoot till you like it. Losing the emotion in the process.',
        createTimestamp: new Date()
    },
    {
        id: 1,
        newEntry: 'photography',
        title: 'How do you get better images?',
        body: 'Go out and shoot! Yes it is that simple. The more you shoot the easier it is find your style and your groove.',
        createTimestamp: new Date()
    }
]