# Benchmark
## Get unique set of random numbers in selected renge from 0..x

Testing the speed of different ways to get the unique random set of numbers from the selected renge between 0 and x.

Inspired by: [Generate unique random numbers between 1 and 100](https://stackoverflow.com/questions/2380019/generate-unique-random-numbers-between-1-and-100)

Fill free to suggest improvements for the test.

My results:

```
Testing 10000 x (80 out of 100)

Shuffle function  took 205.500ms  --- The worse
Hash function  took 48.448ms   --- The BEST
Set function  took 77.849ms   --- reasonable
IndexOf function  took 105.924ms

--------------------------------------------------

Testing 10000 x (10 out of 100)

Shuffle function  took 203.991ms  --- The worse
Hash function  took 11.478ms
Set function  took 8.007ms    --- reasonable
IndexOf function  took 4.859ms   --- The BEST


--------------------------------------------------

Testing 10000 x (10 out of 1000)

Shuffle function  took 2772.697ms   --- wow, no words (but expected)
Hash function  took 29.295ms
Set function  took 8.435ms     --- reasonable
IndexOf function  took 4.792ms   --- The BEST


```


