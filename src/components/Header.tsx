import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Heart, Upload, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  onSearch: (query: string) => void;
}

export function Header({ onSearch }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-md group-hover:shadow-glow transition-all">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                EduVerseX Pro
              </h1>
              <p className="text-xs text-muted-foreground">Perpustakaan Digital</p>
            </div>
          </button>

          {/* Search */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Cari buku, mata pelajaran, atau topik..."
                className="pl-10 bg-muted/50 border-border/50"
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/favorites')}
              className="relative"
            >
              <Heart className="w-5 h-5" />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex gap-2"
            >
              <Upload className="w-4 h-4" />
              Upload
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
