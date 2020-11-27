import os  

# Reading all files of the current directory
arr = os.listdir()

# Renameing files 
num=1
for i in arr: 
	print (i)
	if i != 'renaming_files.py':
		os.rename(i,str(num)+'.png') 
		num += 1
