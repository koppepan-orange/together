import pickle

#sample_list = [1,2,3]
#sample_list2 = [4,5,6]
#f = open("sample.binaryfile","wb")
#pickle.dump(sample_list,f)
#pickle.dump(sample_list2,f)
#f.close

f = open("sample.binaryfile","rb")

print('こんにちは！！！！discoでリアクションが禁止されたコッペパンです！！！！！！！！')

print(pickle.load(f))

#print(sample_list)

