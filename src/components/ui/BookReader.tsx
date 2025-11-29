import { Book } from '@/data/books';
import { Button } from '@/components/ui/button';
import { X, ZoomIn, ZoomOut, Maximize, Moon, Sun, BookmarkPlus, Highlighter } from 'lucide-react';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BookReaderProps {
  book: Book;
  onClose: () => void;
}

export function BookReader({ book, onClose }: BookReaderProps) {
  const [zoom, setZoom] = useState(100);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className={`fixed inset-0 z-50 ${isDarkMode ? 'bg-gray-900' : 'bg-background'} animate-fade-in`}>
      {/* Header */}
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-card'} border-b border-border shadow-sm`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
              >
                <X className="w-5 h-5" />
              </Button>
              <div>
                <h2 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-foreground'}`}>
                  {book.title}
                </h2>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-muted-foreground'}`}>
                  {book.subject} • {book.pages} halaman
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setZoom(Math.max(50, zoom - 10))}
              >
                <ZoomOut className="w-4 h-4" />
              </Button>
              
              <Badge variant="secondary" className="px-3">
                {zoom}%
              </Badge>
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => setZoom(Math.min(200, zoom + 10))}
              >
                <ZoomIn className="w-4 h-4" />
              </Button>

              <div className="w-px h-6 bg-border mx-2" />

              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsFullscreen(!isFullscreen)}
              >
                <Maximize className="w-4 h-4" />
              </Button>

              <div className="w-px h-6 bg-border mx-2" />

              <Button
                variant="outline"
                size="sm"
                className="gap-2"
              >
                <Highlighter className="w-4 h-4" />
                Highlight
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="gap-2"
              >
                <BookmarkPlus className="w-4 h-4" />
                Bookmark
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Reader Content */}
      <div className="h-[calc(100vh-73px)] overflow-auto">
        <div className="container mx-auto px-4 py-8">
          <Card 
            className={`max-w-4xl mx-auto ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-card'}`}
            style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
          >
            <div className="p-12">
              {/* Book Cover Preview */}
              <div className="mb-8">
                <img 
                  src={book.thumbnail} 
                  alt={book.title}
                  className="w-48 h-64 object-cover rounded-lg shadow-lg mx-auto"
                />
              </div>

              {/* Book Info */}
              <div className={`space-y-6 ${isDarkMode ? 'text-gray-200' : 'text-foreground'}`}>
                <div className="text-center border-b pb-4">
                  <h3 className="text-3xl font-bold mb-2">{book.title}</h3>
                  <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-muted-foreground'}`}>
                    {book.subject} • {book.level} {book.grade && `Kelas ${book.grade}`}
                  </p>
                </div>

                {/* Preview Content */}
                <div className="prose prose-lg max-w-none">
                  <h4 className="text-xl font-semibold mb-3">Tentang Buku Ini</h4>
                  <p className={`mb-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-foreground'}`}>
                    {book.description}
                  </p>

                  {book.preview && (
                    <>
                      <h4 className="text-xl font-semibold mb-3 mt-6">Isi Materi</h4>
                      <p className={`mb-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-foreground'}`}>
                        {book.preview}
                      </p>
                    </>
                  )}

                  {/* Sample Content */}
                  <div className={`mt-8 p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-muted/50'}`}>
                    <h4 className="text-lg font-semibold mb-3">📖 Contoh Isi Halaman</h4>
                    <div className="space-y-3 text-base">
                      <p className="leading-relaxed">
                        Buku ini dirancang untuk membantu siswa memahami materi dengan cara yang mudah dan menyenangkan. 
                        Setiap bab dilengkapi dengan penjelasan yang jelas, contoh soal, dan latihan untuk mengasah pemahaman.
                      </p>
                      <p className="leading-relaxed">
                        Dengan pendekatan yang sistematis, siswa akan dibimbing step by step untuk menguasai setiap konsep penting 
                        dalam mata pelajaran ini.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 justify-center pt-6">
                  <Button className="bg-gradient-primary hover:opacity-90">
                    📖 Mulai Membaca Lengkap
                  </Button>
                  <Button variant="outline">
                    ⬇️ Download PDF
                  </Button>
                </div>

                {/* Info Box */}
                <div className={`mt-6 p-4 rounded-lg text-center text-sm ${isDarkMode ? 'bg-blue-900/30 text-blue-200' : 'bg-blue-50 text-blue-700'}`}>
                  💡 Tip: Gunakan AI Assistant di pojok kanan bawah untuk bertanya tentang materi buku ini!
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation */}
          <div className="max-w-4xl mx-auto mt-6 flex items-center justify-between">
            <Button variant="outline">
              ← Halaman Sebelumnya
            </Button>
            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-muted-foreground'}`}>
              Halaman 1 dari {book.pages}
            </span>
            <Button variant="outline">
              Halaman Selanjutnya →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
