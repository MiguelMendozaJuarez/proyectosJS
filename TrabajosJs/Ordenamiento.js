const array = [9, 3, 1, 6, 5, 88, -1, 2, 7];

function sortDescending(array) {
    array.sort(function(a, b) {
        return b - a;
    });
    return array;
}

/////////////////////////////////////////////////////////
const input = ['b', 'h', 'w', 'e', 'a'];

function ascii(inputList) {
    inputList.sort(function(a, b) {
      return a.charCodeAt(0) - b.charCodeAt(0);
    });
    return inputList;
  }
  
//////////////////////////////////////////////////////////////

class Alumno {
    constructor(name, grades) {
      this.name = name;
      this.grades = grades;
    }
  
    average() {
      const sumGrades = this.grades.reduce((total, grade) => total + grade, 0)/this.grades.length;
      return sumGrades;
    }
  }

  const student = new Alumno('Pedro Navaja', [90, 85, 92, 88, 95]);

  /////////////////////////////////////////////////////////////////

  const array3 = ["goodbye", "hello", "maximum", "one", "farewell"];

  function sortByLength(words) {
    return words.sort(function(a, b) {
      return a.length - b.length;
    });
  }
  
//////////////////////////////////////////////////////////////////////

    const array4 = [[7, 3], [2, 2], [1, 0], [4, 3]];

    function distanceToOrigin(coordinate) {
    const [x, y] = coordinate;
    return x * x + y * y; 
    }
  
    function sortByDistanceToOrigin(coordinates) {
        return coordinates.sort(function(a, b) {
        return distanceToOrigin(a) - distanceToOrigin(b);
        });
    }

  //////////////////////////////////////////////////////////////////

  