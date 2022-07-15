def add(x, y):
    return x + y
def sub(x, y):
    return x - y
def apply(func, x, y): # 1
    return func(x, y) # 2
apply(add, 2, 1) # apply(sub, 2, 1)