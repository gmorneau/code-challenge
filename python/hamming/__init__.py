# Define your compute function here.
# run python -m unittest test.hamming_test to ensure the
# unit tests pass and your code meets all of the conditions.
#

def compute(strand1, strand2):
    if len(strand1) != len(strand2):
        raise ValueError
    else:
        totalDistance = 0
        for strand1_char, strand2_char in zip(strand1, strand2):
            if strand1_char != strand2_char:
                totalDistance += 1
        return totalDistance
