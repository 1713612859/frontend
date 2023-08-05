import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;

public class tt {

    public static void main(String[] args) throws FileNotFoundException {
        System.out.println(11111111);

        File file = new File("02.ts");
        String absolutePath = file.getAbsolutePath();
        if (file != null) {
            System.out.println("绝对路径" + absolutePath);
            InputStream fis = new FileInputStream(file);

        }

    }
}