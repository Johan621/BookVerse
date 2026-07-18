import re

# 1. BookProps
with open('src/components/books/BookCard.tsx', 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('interface BookProps', 'export interface BookProps')
with open('src/components/books/BookCard.tsx', 'w', encoding='utf-8') as f:
    f.write(c)

# 2 & 8. ChatSidebar and ConversationList user optionality
for file in ['src/components/chat/ChatSidebar.tsx', 'src/components/dashboard/messages/ConversationList.tsx']:
    with open(file, 'r', encoding='utf-8') as f:
        c = f.read()
    c = c.replace('c.user.avatar', 'c.user?.avatar')
    c = c.replace('conv.user.avatar', 'conv.user?.avatar')
    c = c.replace('conv.user.name', 'conv.user?.name')
    c = c.replace('c.user.name', 'c.user?.name')
    c = c.replace('conv.unread > 0', '(conv.unread || 0) > 0')
    c = c.replace('conv.unreadCount > 0', '(conv.unreadCount || 0) > 0')
    c = c.replace('{conv.unreadCount}', '{conv.unreadCount || 0}')
    with open(file, 'w', encoding='utf-8') as f:
        f.write(c)

# 3. ConstructionPlaceholder href
with open('src/components/common/ConstructionPlaceholder.tsx', 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('href={actionHref}', 'href={actionHref || "#"}')
with open('src/components/common/ConstructionPlaceholder.tsx', 'w', encoding='utf-8') as f:
    f.write(c)

# 4. common index
with open('src/components/common/index.ts', 'r', encoding='utf-8') as f:
    c = f.read()
c = re.sub(r'export \* from "\./ErrorBoundary";\n', '', c)
c = re.sub(r'export \* from "\./Logo";\n', '', c)
with open('src/components/common/index.ts', 'w', encoding='utf-8') as f:
    f.write(c)

# 5. ExchangeCard status case insensitive
with open('src/components/dashboard/exchanges/ExchangeCard.tsx', 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('statusConfig[status]', 'statusConfig[(status?.toLowerCase() as ExchangeStatus) || "pending"]')
with open('src/components/dashboard/exchanges/ExchangeCard.tsx', 'w', encoding='utf-8') as f:
    f.write(c)

# 6. ExchangeTimeline types
with open('src/types/exchange.ts', 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('"MESSAGE" | "ACCEPTED"', '"MESSAGE" | "ACCEPTED" | "REJECTED" | "COMPLETED" | "CANCELLED"')
with open('src/types/exchange.ts', 'w', encoding='utf-8') as f:
    f.write(c)

# 7. ChatArea
with open('src/components/dashboard/messages/ChatArea.tsx', 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('import { type Conversation } from "./ConversationList";', 'import type { Conversation } from "@/types/chat";')
with open('src/components/dashboard/messages/ChatArea.tsx', 'w', encoding='utf-8') as f:
    f.write(c)

# 9. ui index
with open('src/components/ui/index.ts', 'r', encoding='utf-8') as f:
    c = f.read()
c = re.sub(r'export \* from "\./Select";\n', '', c)
c = re.sub(r'export \* from "\./Progress";\n', '', c)
with open('src/components/ui/index.ts', 'w', encoding='utf-8') as f:
    f.write(c)
