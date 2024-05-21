import os
os.system("cls")

import edgar

edgar.set_identity("William Jacobsen villi05.v.j@gmail.com")

company = edgar.Company("AAPL")

filings = company.get_filings(form="10-K")

filing = filings[3].obj()

#print(dir(filing))
#['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', 
# '__format__', '__ge__', '__getattribute__', '__getitem__', '__gt__', '__hash__', 
# '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', 
# '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rich__', '__setattr__', 
# '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_filing', 
# 'balance_sheet', 'cash_flow_statement', 'chunked_document', 'company', 'doc', 
# 'filing_date', 'financials', 'form', 'income_statement', 'items', 'structure', 'view']


df = filing.income_statement.to_dataframe()

print(df[df.columns[0]]) # labels

print(df[df.columns[1]])

labels = df[df.columns[0]]
income_statement = df[df.columns[1]]

print("")
print(f"{labels.iloc[0]} {income_statement[income_statement.index[0]]}") # revenue is wrong?
print(f"{labels.iloc[1]} {income_statement[income_statement.index[1]]}")



