line = "this is a string"
def split_and_join(line):
    ls = line.split(' ')
    for s in ls:
        new_str = "-".join(ls)
    return new_str

split_and_join(line)