//Section 1

//1. Interpolation is used to insert a variable into a string. 
// String concatenation works with two strings - it is used to combine two strings together.
//2. DRY code stands for Do Not Repeat Yourself. This is important to pay attention to so that
//our code is easier to read and runs quicker. 

//Section 2

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a + b === c);
console.log(a * a === d);
console.log(e === 'Kevin');
console.log(48 !== '48');

//Section 3

//while (true) {
///console.log('Do not run this loop');
//}
// This is an infinite loop because there is nothing in the code to break the loop. 

//const runProgram = true;

//while (runProgram) {
//	console.log('Do not run this loop');
//	runProgram = false;
//}
// This is not an infinite loop because you cannot change the const.

//let letters = "A";
//let i = 0;

//while (i < 20) {
//	letters += "A";
//	i++;
//}

//console.log(letters);
// I think the code will log 20 A's. 

//let letters = "A";
//let i = 0;

//while (i < 20) {
//	letters += "A";
//	i++;
//}

//console.log(letters);
//I was given the expected output!

//Section 4

//A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities?
// A while loop is used while certain conditions are true or false. A for loop is used to specifically loop
//through with an iterator for a given number of times. 

//for (let i=0; i < 999; i++) {
	//console.log(i);
//}

//for (let i=0; i < 100; i++) {
//console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
//}
//What are the three components of the control panel? Each component is separated by a semicolon ;.

//Write your answers as comments in the file.

//The first part of the control panel is: declaration
//The second part of the control panel is: condition
//The third part of the control panel is: action 

//for (var i = 999; i >= 0; i --) {
//	console.log(i);
//}

//function moreCounting() {
	//for(let i = 0; i <= 10; i++){
		//console.log('The value of i is: ${i}');
//	}
//};
//moreCounting();

//const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
//for (let i=0; i <= StarWars.length-1; i++){
//	console.log(StarWars[i]);
//}

// Section 5 

/*Last login: Mon Mar 19 19:59:54 on ttys000
➜  ~ ls
Applications       Downloads          Music              my-favorite-things
Code               Fundamentals       Pictures
Desktop            Library            Public
Documents          Movies             homework
➜  ~ mkdir galaxy_far_far_away
➜  ~ mkdir death_star
➜  ~ cd death_star
➜  death_star touch darth_vader.txt touch princess_leia.txt touch storm_trooper.txt
➜  death_star ls
darth_vader.txt   princess_leia.txt storm_trooper.txt touch
➜  death_star rm touch             
➜  death_star ls
darth_vader.txt   princess_leia.txt storm_trooper.txt
➜  death_star cd ..
➜  ~ ls
Applications        Downloads           Music               galaxy_far_far_away
Code                Fundamentals        Pictures            homework
Desktop             Library             Public              my-favorite-things
Documents           Movies              death_star
➜  ~ cd galaxy_far_far_away
➜  galaxy_far_far_away mkdir tatooine
➜  galaxy_far_far_away ls
tatooine
➜  galaxy_far_far_away cd tatooine
➜  tatooine touch luke.txt ben_kenobi.txt
➜  tatooine ls
ben_kenobi.txt luke.txt
➜  tatooine mkdir millenium_falcon
➜  tatooine cd millenium_falcon
➜  millenium_falcon touch han_solo.txt chewbaca.txt
➜  millenium_falcon ls
chewbaca.txt han_solo.txt
➜  millenium_falcon cd ..
➜  tatooine mv ben_kenobi.txt obi_wan.txt
➜  tatooine ls
luke.txt         millenium_falcon obi_wan.txt
➜  tatooine cd ..
➜  galaxy_far_far_away ls
tatooine
➜  galaxy_far_far_away cd ..
➜  ~ ls
Applications        Downloads           Music               galaxy_far_far_away
Code                Fundamentals        Pictures            homework
Desktop             Library             Public              my-favorite-things
Documents           Movies              death_star
➜  ~ cd death_star
➜  death_star ls
darth_vader.txt   princess_leia.txt storm_trooper.txt
➜  death_star cp storm_trooper.txt /tattoine
cp: /tattoine: Permission denied
➜  death_star cd ..
➜  ~ ls
Applications        Downloads           Music               galaxy_far_far_away
Code                Fundamentals        Pictures            homework
Desktop             Library             Public              my-favorite-things
Documents           Movies              death_star
➜  ~ cp storm_trooper.txt /tatooine
cp: storm_trooper.txt: No such file or directory
➜  ~ cd death_star
➜  death_star cp storm_trooper.txt /tatooine
cp: /tatooine: Permission denied
➜  death_star cp "storm_trooper.txt" ../tatooine
➜  death_star ls
darth_vader.txt   princess_leia.txt storm_trooper.txt
➜  death_star cd ..
➜  ~ ls
Applications        Downloads           Music               galaxy_far_far_away
Code                Fundamentals        Pictures            homework
Desktop             Library             Public              my-favorite-things
Documents           Movies              death_star          tatooine
➜  ~ rm tatooine
➜  ~ ls
Applications        Downloads           Music               galaxy_far_far_away
Code                Fundamentals        Pictures            homework
Desktop             Library             Public              my-favorite-things
Documents           Movies              death_star
➜  ~ cd galaxy_far_far_away
➜  galaxy_far_far_away ls 
tatooine
➜  galaxy_far_far_away cd tatooine
➜  tatooine ls
luke.txt         millenium_falcon obi_wan.txt
➜  tatooine cd ..
➜  galaxy_far_far_away cd ..
➜  ~ cd death_star
➜  death_star cp storm_trooper.txt ../tatooine/
cp: directory ../tatooine does not exist
➜  death_star cd ..
➜  ~ mv /death_star /galaxy_far_far_away
mv: rename /death_star to /galaxy_far_far_away: No such file or directory
➜  ~ ls
Applications        Downloads           Music               galaxy_far_far_away
Code                Fundamentals        Pictures            homework
Desktop             Library             Public              my-favorite-things
Documents           Movies              death_star
➜  ~ cd galaxy_far_far_away
➜  galaxy_far_far_away ls
tatooine
➜  galaxy_far_far_away cd tatooine
➜  tatooine ls
luke.txt         millenium_falcon obi_wan.txt
➜  tatooine cd ..
➜  galaxy_far_far_away cd death_star
cd: no such file or directory: death_star
➜  galaxy_far_far_away cd ..
➜  ~ cd death_star
➜  death_star ls
darth_vader.txt   princess_leia.txt storm_trooper.txt
➜  death_star mv -r storm_trooper.txt ../tatooine/
mv: illegal option -- r
usage: mv [-f | -i | -n] [-v] source target
       mv [-f | -i | -n] [-v] source ... directory
➜  death_star cp storm_trooper.txt ../tatooine
➜  death_star cd ..
➜  ~ ls
Applications        Downloads           Music               galaxy_far_far_away
Code                Fundamentals        Pictures            homework
Desktop             Library             Public              my-favorite-things
Documents           Movies              death_star          tatooine
➜  ~ cp storm_trooper.txt ../tatooine/
cp: directory ../tatooine does not exist
➜  ~ rm -r death_star
➜  ~ ls
Applications        Downloads           Music               homework
Code                Fundamentals        Pictures            my-favorite-things
Desktop             Library             Public              tatooine
Documents           Movies              galaxy_far_far_away
➜  ~ rm tatooine
➜  ~ ls
Applications        Downloads           Music               homework
Code                Fundamentals        Pictures            my-favorite-things
Desktop             Library             Public
Documents           Movies              galaxy_far_far_away
➜  ~ cd galaxy_far_far_away
➜  galaxy_far_far_away mkdir death_star
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd death_star
➜  death_star touch darth_vader.txt princess_leia.txt storm_trooper.txt
➜  death_star ls
darth_vader.txt   princess_leia.txt storm_trooper.txt
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd tatooine
➜  tatooine ls
luke.txt         millenium_falcon obi_wan.txt
➜  tatooine cd ..
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd death_star
➜  death_star cp storm_trooper.txt ../tatooine 
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd tatooine
➜  tatooine ls
luke.txt          millenium_falcon  obi_wan.txt       storm_trooper.txt
➜  tatooine mv luke.txt millenium_falcon 
➜  tatooine ls
millenium_falcon  obi_wan.txt       storm_trooper.txt
➜  tatooine mv obi_wan.txt millenium_falcon 
➜  tatooine ls
millenium_falcon  storm_trooper.txt
➜  tatooine mv millenium_falcon/ galaxy_far_far_away/
➜  tatooine ls
galaxy_far_far_away storm_trooper.txt
➜  tatooine cd galaxy_far_far_away
➜  galaxy_far_far_away ls
chewbaca.txt han_solo.txt luke.txt     obi_wan.txt
➜  galaxy_far_far_away cd ..
➜  tatooine cd ..
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd tatooine
➜  tatooine ls
galaxy_far_far_away storm_trooper.txt
➜  tatooine mv galaxy_far_far_away/ millenium_falcon/
➜  tatooine ls
millenium_falcon  storm_trooper.txt
➜  tatooine mv millenium_falcon/ ..
➜  tatooine ls
storm_trooper.txt
➜  tatooine cd ..
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine
➜  galaxy_far_far_away mv millenium_falcon/death_star
usage: mv [-f | -i | -n] [-v] source target
       mv [-f | -i | -n] [-v] source ... directory
➜  galaxy_far_far_away mv millenium_falcon/ ../death_star/
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd death_star
➜  death_star ls
darth_vader.txt   princess_leia.txt storm_trooper.txt
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd ..
➜  ~ ls
Applications        Downloads           Music               galaxy_far_far_away
Code                Fundamentals        Pictures            homework
Desktop             Library             Public              my-favorite-things
Documents           Movies              death_star
➜  ~ cd death_star
➜  death_star ls
chewbaca.txt han_solo.txt luke.txt     obi_wan.txt
➜  death_star mv death_star/ galaxy_far_far_away/
mv: rename death_star/ to galaxy_far_far_away/: No such file or directory
➜  death_star cd ..
➜  ~ ls
Applications        Downloads           Music               galaxy_far_far_away
Code                Fundamentals        Pictures            homework
Desktop             Library             Public              my-favorite-things
Documents           Movies              death_star
➜  ~ mv death_star/ galaxy_far_far_away/
mv: rename death_star/ to galaxy_far_far_away/death_star/: Directory not empty
➜  ~ cd death_star
➜  death_star mv death_star millenium falcon
usage: mv [-f | -i | -n] [-v] source target
       mv [-f | -i | -n] [-v] source ... directory
➜  death_star mv death_star/ ../millenium_falcon
mv: rename death_star/ to ../millenium_falcon: No such file or directory
➜  death_star cd ..  
➜  ~ ls
Applications        Downloads           Music               galaxy_far_far_away
Code                Fundamentals        Pictures            homework
Desktop             Library             Public              my-favorite-things
Documents           Movies              death_star
➜  ~ cd galaxy_far_far_away
➜  galaxy_far_far_away ls
death_star tatooine
➜  galaxy_far_far_away cd death_star
➜  death_star ls
darth_vader.txt   princess_leia.txt storm_trooper.txt
➜  death_star mv princess_leia.txt ../death_star
mv: princess_leia.txt and ../death_star/princess_leia.txt are identical
➜  death_star cd ..
➜  galaxy_far_far_away cd ..
➜  ~ cd death_star
➜  death_star rm obi_wan.txt
➜  death_star ls
chewbaca.txt han_solo.txt luke.txt
➜  death_star rm -r death_star
rm: death_star: No such file or directory
➜  death_star cd ..
➜  ~ ls
Applications        Downloads           Music               galaxy_far_far_away
Code                Fundamentals        Pictures            homework
Desktop             Library             Public              my-favorite-things
Documents           Movies              death_star
➜  ~ rm -r death_star
➜  ~ ls
Applications        Downloads           Music               homework
Code                Fundamentals        Pictures            my-favorite-things
Desktop             Library             Public
Documents           Movies              galaxy_far_far_away
➜  ~ cd galaxy_far_far_away
➜  galaxy_far_far_away mkdir millenium_falcon
➜  galaxy_far_far_away cd millenium_falcon
➜  millenium_falcon touch luke.txt chewbaca.txt han_solo.txt
➜  millenium_falcon cd ..
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine
➜  galaxy_far_far_away cd tatooine
➜  tatooine ls
storm_trooper.txt
➜  tatooine cd ..
➜  galaxy_far_far_away cd death_star
➜  death_star ls
darth_vader.txt   princess_leia.txt storm_trooper.txt
➜  death_star mv princess_leia.txt millenium_falcon
➜  death_star ls
darth_vader.txt   millenium_falcon  storm_trooper.txt
➜  death_star mv millenium_falcon princess_leia.txt
➜  death_star ls
darth_vader.txt   princess_leia.txt storm_trooper.txt
➜  death_star mv princess_leia.txt ..
➜  death_star ls
darth_vader.txt   storm_trooper.txt
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star        millenium_falcon  princess_leia.txt tatooine
➜  galaxy_far_far_away mv princess_leia.txt /millenium_falcon
mv: rename princess_leia.txt to /millenium_falcon: Permission denied
➜  galaxy_far_far_away mv princess_leia.txt millenium_falcon/
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine
➜  galaxy_far_far_away cd millenium_falcon
➜  millenium_falcon ls
chewbaca.txt      han_solo.txt      luke.txt          princess_leia.txt
➜  millenium_falcon cd ..
➜  galaxy_far_far_away mkdir yavin_4
➜  galaxy_far_far_away ls 
death_star       millenium_falcon tatooine         yavin_4
➜  galaxy_far_far_away mv millenium_falcon/ yavin_4/
➜  galaxy_far_far_away ls
death_star tatooine   yavin_4
➜  galaxy_far_far_away cd yavin_4
➜  yavin_4 ls
millenium_falcon
➜  yavin_4 mkdir x_wing
➜  yavin_4 cd ..
➜  galaxy_far_far_away ls
death_star tatooine   yavin_4
➜  galaxy_far_far_away cd death_star
➜  death_star ls
darth_vader.txt   storm_trooper.txt
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star tatooine   yavin_4
➜  galaxy_far_far_away cd yavin_4
➜  yavin_4 ls
millenium_falcon x_wing
➜  yavin_4 cd millenium_falcon
➜  millenium_falcon ls
chewbaca.txt      han_solo.txt      luke.txt          princess_leia.txt
➜  millenium_falcon mv princess_leia.txt yavin_4/
mv: rename princess_leia.txt to yavin_4/: No such file or directory
➜  millenium_falcon cd ..
➜  yavin_4 ls   
millenium_falcon x_wing
➜  yavin_4 cd millenium_falcon
➜  millenium_falcon ls
chewbaca.txt      han_solo.txt      luke.txt          princess_leia.txt
➜  millenium_falcon mv princess_leia.txt ../yavin_4
➜  millenium_falcon ls
chewbaca.txt han_solo.txt luke.txt
➜  millenium_falcon cd ..
➜  yavin_4 ls
millenium_falcon x_wing           yavin_4
➜  yavin_4 rm yavin_4
➜  yavin_4 ls
millenium_falcon x_wing
➜  yavin_4 cd ..
➜  galaxy_far_far_away ls
death_star tatooine   yavin_4
➜  galaxy_far_far_away cd death_star
➜  death_star ls
darth_vader.txt   storm_trooper.txt
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star tatooine   yavin_4
➜  galaxy_far_far_away cd yavin_4
➜  yavin_4 ls
millenium_falcon x_wing
➜  yavin_4 cd millenium_falcon
➜  millenium_falcon mv princess_leia.txt ..
mv: rename princess_leia.txt to ../princess_leia.txt: No such file or directory
➜  millenium_falcon mv princess_leia.txt ..
mv: rename princess_leia.txt to ../princess_leia.txt: No such file or directory
➜  millenium_falcon cd ..
➜  yavin_4 mv princess_leia.txt ..
mv: rename princess_leia.txt to ../princess_leia.txt: No such file or directory
➜  yavin_4 cd millenium_falcon
➜  millenium_falcon ls 
chewbaca.txt han_solo.txt luke.txt
➜  millenium_falcon cd ..
➜  yavin_4 ls
millenium_falcon x_wing
➜  yavin_4 cd ..
➜  galaxy_far_far_away ls
death_star tatooine   yavin_4
➜  galaxy_far_far_away cd death_star
➜  death_star ls
darth_vader.txt   storm_trooper.txt
➜  death_star cd ..
➜  galaxy_far_far_away cd ..
➜  ~ ls
Applications        Downloads           Music               homework
Code                Fundamentals        Pictures            my-favorite-things
Desktop             Library             Public
Documents           Movies              galaxy_far_far_away
➜  ~ cd galaxy_far_far_away
➜  galaxy_far_far_away ls
death_star tatooine   yavin_4
➜  galaxy_far_far_away cd yavin_4
➜  yavin_4 ls
millenium_falcon x_wing
➜  yavin_4 cd x-wing
cd: no such file or directory: x-wing
➜  yavin_4 cd x_wing
➜  x_wing ls
➜  x_wing cd ..
➜  yavin_4 ls
millenium_falcon x_wing
➜  yavin_4 cd millenium_falcon
➜  millenium_falcon ls
chewbaca.txt han_solo.txt luke.txt
➜  millenium_falcon touch princess_leia.txt
➜  millenium_falcon mv princess_leia.txt ..
➜  millenium_falcon ls
chewbaca.txt han_solo.txt luke.txt
➜  millenium_falcon cd ..
➜  yavin_4 ls
millenium_falcon  princess_leia.txt x_wing
➜  yavin_4 cd millenium_falcon
➜  millenium_falcon ls
chewbaca.txt han_solo.txt luke.txt
➜  millenium_falcon mv luke.txt ../x_wing/
➜  millenium_falcon ls
chewbaca.txt han_solo.txt
➜  millenium_falcon cd ..
➜  yavin_4 ls
millenium_falcon  princess_leia.txt x_wing
➜  yavin_4 cd x_wing
➜  x_wing ls
luke.txt
➜  x_wing cd ..
➜  yavin_4 mv millenium_falcon/ ..
➜  yavin_4 ls
princess_leia.txt x_wing
➜  yavin_4 cd ..
➜  galaxy_far_far_away ls
death_star       millenium_falcon tatooine         yavin_4
➜  galaxy_far_far_away cd yavin_4
➜  yavin_4 ls
princess_leia.txt x_wing
➜  yavin_4 mv x_wing/ ..
➜  yavin_4 cd ..
➜  galaxy_far_far_away ls
death_star       tatooine         yavin_4
millenium_falcon x_wing
➜  galaxy_far_far_away cd death_star
➜  death_star mkdir tie_fighter_1
➜  death_star mkdir tie_fighter_2
➜  death_star mkdir tie_fighter_3
➜  death_star ls
darth_vader.txt   tie_fighter_1     tie_fighter_3
storm_trooper.txt tie_fighter_2
➜  death_star mv darth_vader.txt ../tie_fighter_1/
mv: rename darth_vader.txt to ../tie_fighter_1/: No such file or directory
➜  death_star mv darth_vader.txt tie_fighter_1/
➜  death_star ls
storm_trooper.txt tie_fighter_1     tie_fighter_2     tie_fighter_3
➜  death_star cp storm_trooper.txt ../tie_fighter_2/
cp: directory ../tie_fighter_2 does not exist
➜  death_star cp storm_trooper.txt ../tie_fighter_2
➜  death_star ls
storm_trooper.txt tie_fighter_1     tie_fighter_2     tie_fighter_3
➜  death_star cp storm_trooper.txt ../tie_fighter_3
➜  death_star mv tie_fighter_1 ..
➜  death_star mv tie_fighter_2 ..
mv: rename tie_fighter_2 to ../tie_fighter_2: Not a directory
➜  death_star ls
storm_trooper.txt tie_fighter_2     tie_fighter_3
➜  death_star mv tie_fighter_2 ..
mv: rename tie_fighter_2 to ../tie_fighter_2: Not a directory
➜  death_star mv tie_fighter_2 ../galaxy_far_far_away
➜  death_star ls
storm_trooper.txt tie_fighter_3
➜  death_star mv tie_fighter_3 ../galaxy_far_far_away 
➜  death_star ls
storm_trooper.txt
➜  death_star cd ..
➜  galaxy_far_far_away ls
death_star          tatooine            tie_fighter_3
galaxy_far_far_away tie_fighter_1       x_wing
millenium_falcon    tie_fighter_2       yavin_4
➜  galaxy_far_far_away rm tie_fighter_2
➜  galaxy_far_far_away rm tie_fighter_3
➜  galaxy_far_far_away 
➜  galaxy_far_far_away cd x_wing
➜  x_wing touch the_force.txt
➜  x_wing ls
luke.txt      the_force.txt
➜  x_wing cd ..
➜  galaxy_far_far_away ls
death_star          millenium_falcon    tie_fighter_1       yavin_4
galaxy_far_far_away tatooine            x_wing
➜  galaxy_far_far_away rm -r death_star
➜  galaxy_far_far_away ls
galaxy_far_far_away tatooine            x_wing
millenium_falcon    tie_fighter_1       yavin_4
➜  galaxy_far_far_away mv x_wing yavin_4/
➜  galaxy_far_far_away ls
galaxy_far_far_away tatooine            yavin_4
millenium_falcon    tie_fighter_1
➜  galaxy_far_far_away mv millenium_falcon yavin_4/
➜  galaxy_far_far_away ls
galaxy_far_far_away tatooine            tie_fighter_1       yavin_4
➜  galaxy_far_far_away 
/*

Section 6

1. The biggest thing I took away from this is that no matter what, mistakes will be made, but the most important thing is to try and teach what you learned to somebody else to improve memory.

2. I learned that you can use Slack to remind you to do something! /"Remind me to finish my homework" 
I also learned that each channel has notification preferences and each can be edited to reduce the amount of notifications you get.

3. I just learned how to pin a response to a whole group, which will be extremely useful throughout the entire course.
It will help with homework, group projects, etc. If you ever get stuck on a specific part of code, you can paste it into Slack and get feedback!
