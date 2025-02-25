class StrangerStrings {

    getHelloWorld(){
        return "Hello World";
    }

    concatenation(firstSegment, secondSegment){
        return firstSegment + secondSegment;
    }

    getPrefix(input){
        return input.substring(0,3);
    }

    getSuffix(input){
        return input.substring(input.length - 3,input.length);
    }

    getMiddleCharacter(input){
        let position;
        let length;

        if(input.length % 2 == 1) {
            position = input.length / 2;
            length = 1;
        } else {
            position = input.length / 2 - 1;
            length = 2;
        }
        return input.substring(position, position + length);
    }

    getFirstWord(input){
        return input.substring(0,6);
    }
    
    getSecondWord(secondWord){
        return secondWord.substring(7,11);
    }
    
    reverse(input){
        let reverseString= "";
        for (let i = input.length - 1; i >= 0; i--) { 
            reverseString += input[i];
        }
        return reverseString;
    }
}

module.exports = StrangerStrings;