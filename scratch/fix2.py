import re
import os

# 1. ChatSidebar
file1 = 'src/components/chat/ChatSidebar.tsx'
with open(file1, 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('src={conv.user.avatar}', 'src={conv.user?.avatar || ""}')
c = c.replace('alt={conv.user.name}', 'alt={conv.user?.name || ""}')
c = c.replace('conv.unread > 0', '(conv.unread || 0) > 0')
c = c.replace('{conv.unread}', '{conv.unread || 0}')
with open(file1, 'w', encoding='utf-8') as f:
    f.write(c)

# 2. ConversationList
file2 = 'src/components/dashboard/messages/ConversationList.tsx'
with open(file2, 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('src={c.user.avatar}', 'src={c.user?.avatar || ""}')
c = c.replace('alt={c.user.name}', 'alt={c.user?.name || ""}')
c = c.replace('src={conv.user.avatar}', 'src={conv.user?.avatar || ""}')
c = c.replace('alt={conv.user.name}', 'alt={conv.user?.name || ""}')
c = c.replace('conv.unreadCount > 0', '(conv.unreadCount || 0) > 0')
c = c.replace('{conv.unreadCount}', '{conv.unreadCount || 0}')
with open(file2, 'w', encoding='utf-8') as f:
    f.write(c)

# 3. ConstructionPlaceholder
file3 = 'src/components/common/ConstructionPlaceholder.tsx'
with open(file3, 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('href={actionHref}', 'href={actionHref || "#"}')
with open(file3, 'w', encoding='utf-8') as f:
    f.write(c)

# 4. common index
file4 = 'src/components/common/index.ts'
with open(file4, 'r', encoding='utf-8') as f:
    c = f.read()
c = re.sub(r'export \* from "\./ErrorBoundary";\n', '', c)
c = re.sub(r'export \* from "\./Logo";\n', '', c)
with open(file4, 'w', encoding='utf-8') as f:
    f.write(c)

# 5. ui index
file5 = 'src/components/ui/index.ts'
with open(file5, 'r', encoding='utf-8') as f:
    c = f.read()
c = re.sub(r'export \* from "\./Select";\n', '', c)
c = re.sub(r'export \* from "\./Progress";\n', '', c)
with open(file5, 'w', encoding='utf-8') as f:
    f.write(c)
