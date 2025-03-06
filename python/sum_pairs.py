def sum_pairs(num_list, num):
    seen = set()
    answer = []

    for n in num_list:
        complement = num - n
        if complement in seen:
            answer.append([complement, n])
        seen.add(n)
        
    return answer if len(answer) > 0 else 'unable to find pairs'
