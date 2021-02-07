import CatHat from '../Images/cat-hat.png';
import CatHat2 from '../Images/cat-flamingo.png';
import CatHat3 from '../Images/cowboy-cat.png';
import CatTop from '../Images/supreme-cat.png';
import CatTop2 from '../Images/cat-blouse.png';
import CatTop3 from '../Images/cat-top3.png';
import CatTop4 from '../Images/cat-adidas.png';
import CatGlasses from '../Images/cat-glasses.png'
import CatGlasses2 from '../Images/cat-glasses2.png'
import DogHat from '../Images/cowboy-dog.png';
import DogHat2 from '../Images/beach-dog.png';
import DogTop from '../Images/designer-dog.png';
import DogTop2 from '../Images/dogtop2.png';
import DogTop3 from '../Images/dogtop3.png';
import DogGlasses from '../Images/dog-glasses.png';
import DogGlasses2 from '../Images/dog-glasses2.png';

/* can you make it scaleable better by different arrays for each category, 
less writing 'cat' 'hat' every time
is that what a backend is for? */

const Data = [
    {
        category: 'cat',
        subCategory: 'hat',
        name: 'Top Hat',
        price: 24.99,
        description: 'Your cat will love murdering mice wearing this cute hat.',
        src: CatHat
    },
    {
        category: 'dog',
        subCategory: 'hat',
        name: 'Cowboy hat',
        price: 34.99,
        description: 'For those that love the art of chasing the cows about the field',
        src: DogHat
    },
    {
        category: 'dog',
        subCategory: 'top',
        name: 'Dance Gear',
        price: 24.99,
        description: 'Must carry around a large speaker and always down for a dance off to be able to purchase.',
        src: DogTop2
    },
    {
        category: 'cat',
        subCategory: 'glasses',
        name: 'Gold Moon Glasses',
        price: 14.99,
        description: 'Is your cat a bit hippy with a love of hit 60s music? Then bring out their inner John Lennon.',
        src: CatGlasses
    },
    {
        category: 'cat',
        subCategory: 'hat',
        name: 'Flamingo Hat',
        price: 19.99,
        description: 'Realistic disguise to help your little furr ball take down a pink pest.',
        src: CatHat2
    },
    {
        category: 'dog',
        subCategory: 'hat',
        name: 'Beenie',
        price: 24.99,
        description: 'Perfect hat to keep you warm and trendy.',
        src: DogHat2
    },
    {
        category: 'cat',
        subCategory: 'hat',
        name: ' Cowboy Hat',
        price: 29.99,
        description: 'For those with a wild puss who is out hustling the cows all day.',
        src: CatHat3
    },
    {
        category: 'dog',
        subCategory: 'glasses',
        name: 'Harry Potter',
        price: 24.99,
        description: `You're a Wizard Harry`,
        src: DogGlasses
    },
    {
        category: 'cat',
        subCategory: 'top',
        name: 'Supreme Top',
        price: 44.99,
        description: 'Got an anti-establishment puss? Well this top is perfect for lighting up a fat one down the skatepark.',
        src: CatTop
    },
    {
        category: 'dog',
        subCategory: 'glasses',
        name: 'Librarian Glasses',
        price: 24.99,
        description: `How may I help you?`,
        src: DogGlasses2
    },
    {
        category: 'dog',
        subCategory: 'top',
        name: 'Designer Top',
        price: 499.99,
        description: 'For when you are a footballer and need everyone in the neighbourhood to know, via your dog.',
        src: DogTop
    },
    {
        category: 'cat',
        subCategory: 'glasses',
        name: 'Librarian Glasses',
        price: 14.99,
        description: 'Perfect for those cats who love nothing more than sitting on your book or laptop whilst you are busy.',
        src: CatGlasses2
    },
    {
        category: 'cat',
        subCategory: 'top',
        name: 'Adidas Top',
        price: 29.99,
        description: `I roam the concrete jungle, hunting idiots for sport.`,
        src: CatTop4
    },
    {
        category: 'dog',
        subCategory: 'top',
        name: 'Leather Jacket',
        price: 94.99,
        description: 'Blade runner approved.',
        src: DogTop3
    },
    {
        category: 'cat',
        subCategory: 'top',
        name: 'Blouse',
        price: 19.99,
        description: 'One for the elder cat who likes staring out the window shouting at everyone that passes.',
        src: CatTop2
    },
    {
        category: 'cat',
        subCategory: 'top',
        name: 'Fight Night',
        price: 99.99,
        description: `You're getting smashed 3 ways from Sunday pal.`,
        src: CatTop3
    }
]

export default Data